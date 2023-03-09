from fastapi import APIRouter, Depends
from queries.rollercoasters import CoastersQueries, Rollercoaster, RollercoasterDetail
from typing import List


router = APIRouter()


@router.get('/api/coasters/all', response_model=List[Rollercoaster])
def get_coasters(repo: CoastersQueries= Depends()):
        return repo.get_all_coasters()

@router.get('/api/coasters/{id}', response_model=RollercoasterDetail)
def get_coasters( id: int, repo: CoastersQueries=Depends()):
        return repo.get_coaster_detail(id=id)
