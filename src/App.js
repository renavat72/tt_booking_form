import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Theme } from './components/Theme';
import { FormWindow } from './components/Windows/FormWindow';
import { ResultWindow } from './components/Windows/ResultWindows';
import { fetchData } from './store/asyncActions';

function App() {
  const { post, error, loading } = useSelector(state => state.postReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <Theme>
      {post ? <ResultWindow post={post} error={error}/> :  <FormWindow loading={loading} /> }
    </Theme>
  );
}

export default App;