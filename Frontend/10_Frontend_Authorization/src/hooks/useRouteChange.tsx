import { useNavigate } from "react-router-dom"

export const useRouteChange = (path: string) => {
    const navigate = useNavigate()
    const routeChange = () => {
        navigate(path)
    }
    return routeChange
}