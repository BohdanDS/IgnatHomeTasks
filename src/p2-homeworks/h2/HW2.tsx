import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'all' | 'high' | 'middle' | 'low'

export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}

export type AffairArrayType = Array<AffairType>

export type FilterType = 'all' | 'high' | 'middle' | 'low'

// constants
const defaultAffairs: AffairArrayType = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairArrayType, filter: FilterType) : AffairArrayType => {
    if (filter ==="all") return affairs
    else return affairs.filter(a => a.priority === filter)
    
    // if (filter === 'low') {
    //     return affairs.filter(a => a.priority === 'low')
    // } else if (filter === 'high') {
    //     return affairs.filter(a => a.priority === 'high')
    // } else if (filter === 'middle') {
    //     return affairs.filter(a => a.priority === 'middle')
    // } else {
    //     return affairs
    // }

}
export const deleteAffair = (affairs: AffairArrayType, _id: number) :AffairArrayType => { // need to fix any
    return affairs.filter(a => a._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairArrayType>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
