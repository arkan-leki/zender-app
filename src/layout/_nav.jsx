import { faHome, faPager } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const _nav = [
    {
        name: 'ماڵەوە',
        to: '/',
        icon: <FontAwesomeIcon icon={faHome} />,
    },
    {
        name: 'گروپەکان',
        icon: <FontAwesomeIcon icon={faPager} />,
        items: [],
    },
]

export default _nav