import './App.css';
import FragmentDemoComponent from './components/Fragments/FragmentsDemo';
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
      <FragmentDemoComponent />
    </div>
  );
}

export default App;
