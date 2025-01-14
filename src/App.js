import Test1 from "./Test1";//for test 1
import Test2 from "./Test2";//for text 2
//------------------------1=>Props--------------------------------------------------------
import Props1 from "./Props/Props1";
import Props2 from "./Props/Props2";
import ParentProps from "./Props/ParentProps";
import Parent from "./Props/Parent-Child-Msg/Parent";
//--------------------------2=>State-------------------------------------------------------
import State1 from "./State/State1";
import SetState1 from "./State/SetState1";
//-------------------------3=>Event-------------------------------------------------------
import EventBind from "./Event/EventBind";
//--------------------------4=>Condition----------------------------------------------------
import Condition from "./Condition/Condition";
//-------------------------5=>List---------------------------------------------------------
import StyleSheet from "./Style/StyleSheet";
import User from "./List/User";
//-------------------------6=>Form Handeling--------------------------------------------------
import Form from "./Form/Form";
//-------------------------7=>Lifecycle-------------------------------------------------------
import ComponentA from "./LifeCycle/Mounting/ComponentA";
import LifecycleA from "./LifeCycle/Updating/LifecycleA";
//-------------------------8=>Pure component------------------------------------------------
import ParentComp from "./PureComponent/ParentComp";
//------------------------9=>Memo Component(Func)--------------------------------------------
import ParentMemo from "./MemoComp/ParentMemo";
//-------------------------10=>Refs------------------------------------------------------
import RefsDemo from "./Refs/RefsDemo";
//----------------------------11=>HoC-------------------------------------------------------
import ClickCounter from "./HOC/ClickCounter";
import HoverCounter from "./HOC/HoverCounter";
//-----------------------------12=>RenderProps-------------------------------------------------
import DemoRender from "./RenderProps/DemoRender";
import Counter from "./RenderProps/Counter";
import ClickCounter1 from "./RenderProps/ClickCounter1";
import HoverCounter1 from "./RenderProps/HoverCounter1";
//------------------------------13=>ContextAPI---------------------------------------------
import CompA from "./ContextAPI/CompA";
import { Userprovider } from "./ContextAPI/userContext";
import { Nameprovider } from "./ContextAPI/NameContext";
//----------------------------14=>ajax-----------------------------------------------------
import GETreq from "./AJAX/GETreq";
import POSTreq from "./AJAX/POSTreq";
function App() {
  let count=10;
  return (
    <>
      {/* <Test1 />
      <h1>Hello | Ankan</h1>
      <Test2 /> */} 
      {/*-----------------------------1----------------------------------*/}
       {/*when we know all props what to be send else --------------------*/}
       {/* <Props1 name="Ankan" role="Devloper" />
       <Props1 name="abc" >
        <p id="a">this is a varible props child</p>
       </Props1>
        <Props2 name="xyz" role="Programmer" />
        <Props2>
          <b className="b">bold tag</b>
        </Props2> */}
        {/* ---------parent to child ----------------------------*/}
        {/* <ParentProps/> */}
        {/*------------- child to parent------------------------- */}
        {/* <Parent/> */}
        {/*------------------------------------2---------------------------------*/}
        {/* <State1/>
        <SetState1 number={count}/> */}
        {/* <StyleSheet/> */}
        {/*---------------------------------3-----------------------------------  */}
        {/* <EventBind/> */}
        {/* --------------------------------4-------------------------------------- */}
        {/* <Condition/> */}
        {/* ---------------------------------5------------------------------------ */}
        {/* <User/> */}
        {/* -------------------------------6----------------------------------------*/}
        {/* <Form/> */}
        {/* --------------------------------7------------------------------------- */}
        {/* <ComponentA/>  */}
        {/* <LifecycleA/> */}
        {/* ----------------------------------8----------------------------------------- */}
        {/* <ParentComp/> */}
        {/* -----------------------------------9--------------------------------------- */}
        {/* <ParentMemo/> */}
        {/* ------------------------------10--------------------------------------- */}
        {/* <RefsDemo/> */}
        {/* -------------------------------11----------------------------------------- */}
        {/* <ClickCounter name="Ankan"/>
        <HoverCounter/> */}
        {/* -----------------------------------12----------------------------------- */}
        {/* <DemoRender name="Ankan1"/> */}
        {/* <DemoRender name={()=>"Ankan2"}/> */}
        {/* <DemoRender name={(isLoggedIn)=>isLoggedIn?"Ankan3":"Valuk"}/> */}

        {/* <Counter render={(count,increaseCount)=><ClickCounter1 count={count} increaseCount={increaseCount}/>}/>
        <Counter render={(count,increaseCount)=><HoverCounter1 count={count} increaseCount={increaseCount}/>}/> */}
        {/* --------------------------------13----------------------------------------- */}
        {/* <Userprovider value="Ankan">
          <CompA/>
        </Userprovider> */}
        {/* <Nameprovider value="Manna">
          <CompA/>
        </Nameprovider> */}
        {/* ----------------------------14-------------------------------------- */}
        {/* <GETreq/> */}
        <POSTreq/>
    </>
  );
}

export default App;
