import './App.css';
import { bubbleSort, insertionSort, mergeSort, selectionSort } from './utils/sort';

const App = () => {

  const getRandomChar = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet.charAt(randomIndex);
  }

  const getRandomString = () => {
    const length = Math.floor(Math.random() * 5) + 1;
    let randomString = '';
    for (let i = 0; i < length; i++) {
      randomString += getRandomChar();
    }
    return randomString;
  }

  const numElements = 1000;

  const randomString = () => {
    const arr = [];
    for (let i = 0; i < numElements; i++) {
      const randomString = getRandomString();
      arr.push(randomString);
    }
    return arr
  }

  const initStrings = randomString()
  const bubbleArray = bubbleSort([...initStrings], numElements)
  const insertionArray = insertionSort([...initStrings])
  const selectionArray = selectionSort([...initStrings])
  const mergeArray = mergeSort([...initStrings], 0, numElements - 1)

  return (
    <div className="App">
      <div className="box">
        <p className='title'>Mảng</p>
        {initStrings?.map((item, index) => (<p className='content' key={index}>{index + 1}. {item}</p>))}
      </div>
      <div className="box">
        <p className='title'>Sắp xếp nổi bọt</p>
        {bubbleArray?.map((item, index) => (<p className='content' key={index}>{index + 1}. {item}</p>))}
      </div>
      <div className="box">
        <p className='title'>Sắp xếp chèn</p>
        {insertionArray?.map((item, index) => (<p className='content' key={index}>{index + 1}. {item}</p>))}
      </div>
      <div className="box">
        <p className='title'>Sắp xếp chọn</p>
        {selectionArray?.map((item, index) => (<p className='content' key={index}>{index + 1}. {item}</p>))}
      </div>
      <div className="box">
        <p className='title'>Sắp xếp trộn</p>
        {mergeArray?.map((item, index) => (<p className='content' key={index}>{index + 1}. {item}</p>))}
      </div>
    </div>
  );
}

export default App;
