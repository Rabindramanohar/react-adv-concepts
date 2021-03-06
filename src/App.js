import './App.css';
import CounterDemoComponent from './components/Error Boundries/CounterDemo';
import ErrorBoundriesComponent from './components/Error Boundries/ErrorBoundries';
import ErrorDemoComponent from './components/Error Boundries/ErrorDemoComponent';
// import ParentRefComponent from './components/Forwarding Refs/ParentRef';
/* import FragmentDemoComponent from './components/Fragments/FragmentsDemo';
import NormalComponent from './components/Portals/NormalComponent';
import ParentComponent from './components/Portals/ParentComponent';
import PortalComponent from './components/Portals/PortalComponent';
import RefDemoComponent from './components/Refs/RefDemo'; */
/* import EnhancedCommentComponent from './components/PureComponent/HOC/CommentsComponents';
import CommentsComponents from './components/PureComponent/HOC/CommentsComponents';
import EnhancedLikeComponent from './components/PureComponent/HOC/LikeCounts';
import LikeCounts from './components/PureComponent/HOC/LikeCounts';
import NormalComponent from './components/PureComponent/NormalComponent';
import PureComponents from './components/PureComponent/PureComponent'; */

function App() {
  return (
    <div className="App">
      {/* <NormalComponent />
      <PureComponents /> */}
      {/* <EnhancedLikeComponent />
      <EnhancedCommentComponent /> */}
      {/* <CommentsComponents /> */}
      {/* <FragmentDemoComponent /> */}
      {/* <NormalComponent />
      <PortalComponent /> */}
      {/* <ParentComponent /> */}
      {/* <RefDemoComponent /> */}
      {/* <ParentRefComponent /> */}
      <ErrorBoundriesComponent>
          <ErrorDemoComponent name = "robin" />
      </ErrorBoundriesComponent>
      <ErrorBoundriesComponent>
          <CounterDemoComponent />  
      </ErrorBoundriesComponent>
    </div>
  );
}

export default App;
