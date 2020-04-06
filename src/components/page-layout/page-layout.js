import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextArea from '../text-area/text-area';
import styles from './page-layout.module.css';
import classNames from 'classnames';

const twoColumn = text => {
  const arr = text.split(" ");
  const part1 = arr.slice(0, Math.ceil(arr.length/2));
  const part2 = arr.slice(Math.ceil(arr.length/2));
  return {part1, part2}
};

const treeColumn = (text) => {
  const arr = text.split(" ");
  const part1 = arr.slice(0, Math.ceil(arr.length/3));
  const part2 = arr.slice(Math.ceil(arr.length/3), Math.ceil(arr.length/3)+Math.ceil(arr.length/3));
  const part3 = arr.slice(Math.ceil(arr.length/3)+Math.ceil(arr.length/3));
  return {part1, part2, part3}
};

const arrToString = arr => {
  return arr.join(" ");
}

const PageLayout = ({text, onHandleChange}) => {

  const [ one, setOne] = useState(true);
  const [ two, setTwo] = useState(false);
  const [ tree, setTree] = useState(false);

  const [ editableText, setEditableText ] = useState(text);

  const [ editableText1from2, setEditableText1from2 ] = useState('');
  const [ editableText2from2, setEditableText2from2 ] = useState('');

  const update = () => {
    setEditableText(editableText1from2+" "+editableText2from2);
    onHandleChange(editableText);
    onHandleChange(editableText1from2+" "+editableText2from2);
  }


  const handleClick = e => {
    e.preventDefault();
    if ( e.target.classList.contains('active')) return;
    if (e.target.classList.contains('button1')) {
        setOne(true);
        setTwo(false);
        setTree(false);
        update();
    } else if (e.target.classList.contains('button2')) {
      setTwo(true);
      setTree(false);
      setOne(false);
      update();

    } else {
      setTree(true);
      setOne(false);
      setTwo(false);
      update();
    }
  }

  const handleChangeText = (e) => {
    setEditableText(e.target.value);
    onHandleChange(editableText);
  };

  const handleChangeTextTwoColumn = (e) => {
    if (e.target.name === 'textarea1') {
      setEditableText1from2(e.target.value);
      // onHandleChange(editableText1from2+' '+editableText2from2);
    }
    if (e.target.name === 'textarea2') {
      setEditableText2from2(e.target.value);
      // onHandleChange(editableText1from2+' '+editableText2from2);
    }
  };

  return (
    <form className={styles.view}>
      {one && <TextArea name="text" style={{minWidth: `90%`}}  onHandleChange={handleChangeText} text={editableText}/>}
      {two  && (
        <div className={styles.two}>
          <TextArea name='textarea1' width={40} onHandleChange={handleChangeTextTwoColumn} text={arrToString(twoColumn(editableText).part1)}/>
          <TextArea name='textarea2' width={40} onHandleChange={handleChangeTextTwoColumn} text={arrToString(twoColumn(editableText).part2)}/>
        </div>)
      }
      {tree && (
        <div className={styles.tree}>
          <TextArea name='textarea3' width={30} onHandleChange={handleChangeText} text={arrToString(treeColumn(editableText).part1)}/>
          <TextArea name='textarea4' width={30} onHandleChange={handleChangeText} text={arrToString(treeColumn(editableText).part2)}/>
          <TextArea name='textarea5' width={30} onHandleChange={handleChangeText} text={arrToString(treeColumn(editableText).part3)}/>
        </div>
      )}
      <div className={styles.buttons}>
        <button className={classNames({'active': one}, styles.columnButton, 'button1')}
                onClick={handleClick}
        >One</button>
        <button className={classNames(styles.columnButton, {'active': two}, 'button2')}
                onClick={handleClick}
        >Two</button>
        <button className={classNames(styles.columnButton, {'active': tree}, 'button3')}
                onClick={handleClick}
        >Tree</button>
      </div>
      <Link to="/" className={styles.button}>Home</Link>
    </form>
  )
};

export default PageLayout;
