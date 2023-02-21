from pydantic import BaseModel
import requests


class Park(BaseModel):
    id: int
    name: str
    city: str
    state: str


class Rollercoaster(BaseModel):
    id: int
    name: str
    speed: int
    height: int
    inversionsNumber: int
    # park: Park


open_weather_api_key = "25f6e7dd098021719c86e4b9b0b46f32"

class CoastersQueries:
    def get_us_parks(self):
        us_parks = []
        page_num = 1
        while True:
            headers = {"X-AUTH-TOKEN":"83a8b6bf-c0b4-436e-8550-4ff79c4b04fd"}
            response = requests.get(f"https://captaincoaster.com/api/parks?page={page_num}", headers=headers)
            parks_data = response.json().get("hydra:member")
            for park in parks_data:
                if park["country"]["name"] == "country.usa":
                    us_parks.append(park)
            # if the page doesn't have a "hydra:next" key, exit out of the loop
            if not response.json().get("hydra:view").get("hydra:next"):
                break
            # else, continue onto next page
            page_num += 1
        # get city and state for parks
        for park in us_parks:
            location_response = requests.get(f"http://api.openweathermap.org/geo/1.0/reverse?lat={park.get('latitude')}&lon={park.get('longitude')}&limit=1&appid={open_weather_api_key}")
            location_data = location_response.json()
            try:
                park["city"] = location_data[0]["name"]
                park["state"] = location_data[0]["state"]
            except(KeyError, IndexError):
                park["city"] = "not available"
                park["state"] = "not available"
        return us_parks
    def get_coasters(self, us_parks) -> Rollercoaster:
        rollercoasters = []
        page_num = 1
        while True:
            headers = {"X-AUTH-TOKEN":"83a8b6bf-c0b4-436e-8550-4ff79c4b04fd"}
            response = requests.get(f"https://captaincoaster.com/api/coasters?page={page_num}", headers=headers)
            data = response.json().get("hydra:member")
            for rc in data:
                for park in us_parks:
                    if rc["park"]["@id"] == park["@id"] and rc["status"]["name"] == "status.operating":
                        rc["park"] = park
                        rollercoasters.append(rc)
            if not response.json().get("hydra:view").get("hydra:next"):
                break
            page_num += 1
        return rollercoasters

    def get_all_coasters(self):
        rollercoasters = []
        page_num = 1
        while page_num <= 5:
            headers = {"X-AUTH-TOKEN":"08749fc6-2aca-483b-8b47-f6e90ce7c0dc"}
            response = requests.get(f"https://captaincoaster.com/api/coasters?page={page_num}", headers=headers)
            data = response.json().get("hydra:member")
            for rc in data:
                rollercoasters.append(rc)
            # if not response.json().get("hydra:view").get("hydra:next"):
            #     break
            page_num += 1
        return rollercoasters
