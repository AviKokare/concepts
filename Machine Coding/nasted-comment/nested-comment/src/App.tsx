import './App.css'
import NestedComments from './components/nested-comments';
import commentsList from './data/comments.json';

function App() {
  return (
    <>
      <h1 className='text-center'>This is nested comments system design</h1>
      <NestedComments
        commentsList={commentsList}
        onSubmitComment={() => { }}
        upVote={() => { }}
        downVote={() => { }}
        onEditComment={() => { }}
        onDelete={() => { }}
      />
    </>
  )
}

export default App
