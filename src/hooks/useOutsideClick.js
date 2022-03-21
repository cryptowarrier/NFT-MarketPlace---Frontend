import { useEffect } from 'react'
import _ from 'lodash'

export const useOutsideClick = (refs, handleAction) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            let res = []
            _.forEach(refs, (each, i) => {
                res.push(each.current && !each.current.contains(event.target))
                if (i === refs.length - 1 && !_.some(res, (e) => e === false)) {
                    handleAction(false)
                }
            })
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [refs, handleAction])
}