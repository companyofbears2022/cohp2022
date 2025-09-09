import './index.scss'
import NavBar from '@/components/NavBar'
import Collapse from '@/components/Collapse'
import useStore from '@/store' 
import { useEffect, useState } from 'react'
import DocumentContent from '@/components/DocumentContent'
import Outline from '@/components/Outline'
import { useParams,useNavigate } from 'react-router-dom'
import { useHashParams } from '@/hooks/useHashParams'
import useActiveHeading from '@/hooks/useActiveHeading';

export default function Documents() {

    const [isOutlineUnfolded, setIsOutlineUnfolded] = useState(false)
    const navigate = useNavigate()
    const { language, rawData, getDocumentsData } = useStore()
    const { countryId, typeId } = useParams()
    const uid = useHashParams()
    // console.log('uid',uid);
    
    useEffect(() => {
        getDocumentsData(language)
    }, [language])
    // const [uid, setUid] = useState(0);

    const currentCountry = Number(countryId)?Number(countryId):0
    const currentType = Number(typeId)?Number(typeId):0

    const displayData = rawData.length > 0 ? rawData[currentCountry].categeries[currentType].units : []
    const headingIds = displayData.map(i => String(i.id));
    const activeId   = useActiveHeading(headingIds);
    // const hash = window.location.hash.slice(-1);
    // useEffect(() => {
    //     if (activeId) {
    //         window.location.hash = `#/documents/${countryId}/${typeId}#${activeId}`;
    //     }
    // }, [activeId, countryId, typeId]);

    function handleSubMenuClick(countryId, typeId) {
        navigate(`/documents/${countryId}/${typeId}`)
    }
    function handleMenuClick(countryId) {
        navigate(`/documents/${countryId}/0`)
    }
    function handleOutlineClick(uid) {
        // navigate({pathname: `/documents/${countryId}/${typeId}`, hash: `#${uid}`})
        window.location.hash = `#/documents/${countryId}/${typeId}#${uid}`
        // setUid(uid)
    }

    const handleOutlineIconClick = () => {
        setIsOutlineUnfolded(!isOutlineUnfolded)
    }
    
    return (
        <div className="documents-page">
            <NavBar></NavBar>
            <div className="document-body">
                <Collapse items={ rawData }
                countryId={countryId}
                typeId={typeId}
                handleClick={handleSubMenuClick}
                handleCountryClick={handleMenuClick}
                isOutlineUnfolded={isOutlineUnfolded}
                handleOutlineIconClick={handleOutlineIconClick}
                activeId={activeId}
                handleTOCClick={handleOutlineClick}
                ></Collapse>
                <DocumentContent items={ displayData } uid={uid} handleClick={handleOutlineClick}></DocumentContent>
                <Outline items={ rawData } countryId={countryId} typeId={typeId} activeId={activeId}
                handleClick={handleOutlineClick}></Outline>
            </div>
        </div>
    )
}