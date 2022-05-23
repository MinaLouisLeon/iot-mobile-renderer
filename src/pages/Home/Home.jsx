import { IonPage } from '@ionic/react'
import {useSelector , useDispatch} from 'react-redux';
import { useEffect ,useState} from 'react';
import {getGridItemsData} from '../../Firebase/Firestore';
import {setGridItemsData} from '../../Slices/gridItemsSlice';
import GridComp from '../../components/GridComp/GridComp';
const Home = () => {
  const dispatch = useDispatch(null);
  const [renderGrid,setRenderGrid] = useState(false);
  const uid = useSelector((state) => state.userInfoSlice.userInfo.uid);
  const handleGetItemsLayout = async () => {
    let res = await getGridItemsData(uid);
    console.log(res)
    await dispatch(setGridItemsData(res))
    setRenderGrid(true);
  }
  useEffect(() => {
    handleGetItemsLayout()
  },[])
  return (
    <IonPage>
      {renderGrid &&  <GridComp />}
    </IonPage>
  )
}

export default Home