from pydantic import BaseModel
import requests
from typing import Optional
import os


class Park(BaseModel):
    id: int
    name: str


class MainImage(BaseModel):
    path: str


class MaterialType(BaseModel):
    name: Optional[str]


class Manufacturer(BaseModel):
    name: Optional[str]


class SeatingType(BaseModel):
    name: Optional[str]


class ParkForDetail(BaseModel):
    name: Optional[str]


class Rollercoaster(BaseModel):
    id: int
    name: str
    speed: Optional[int]
    height: Optional[int]
    inversionsNumber: Optional[int]
    park: Park
    mainImage: MainImage


class RollercoasterDetail(BaseModel):
    id: int
    name: str
    speed: Optional[int]
    height: Optional[int]
    inversionsNumber: Optional[int]
    park: ParkForDetail
    mainImage: MainImage
    length: Optional[int]
    manufacturer: Optional[Manufacturer]
    materialType: Optional[MaterialType]
    seatingType: Optional[SeatingType]


class CoastersQueries:
    def get_all_coasters(self):
        rollercoasters = []
        page_num = 1
        while page_num <= 2:
            headers = {"X-AUTH-TOKEN": os.environ["RC_API_KEY"]}
            response = requests.get(f"https://captaincoaster.com/api/coasters?page={page_num}&totalRatings[gte]=500", headers=headers)
            data = response.json().get("hydra:member")
            for rc in data:
                rollercoasters.append(rc)
            page_num += 1
        for r in rollercoasters:
            park = r["park"]["@id"]
            headers = {"X-AUTH-TOKEN": os.environ["RC_API_KEY"]}
            response = requests.get(f"https://captaincoaster.com{park}", headers=headers)
            data = response.json()
            r["park"] = data
        return rollercoasters

    def get_coaster_detail(self, id:int):
        headers = {"X-AUTH-TOKEN": os.environ["RC_API_KEY"]}
        response = requests.get(f"https://captaincoaster.com/api/coasters/{id}", headers=headers)
        data = response.json()
        return data
