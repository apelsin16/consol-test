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

  const [ editableText1from2, setEditableText1from2 ] = useState(arrToString(twoColumn(editableText).part1));
  const [ editableText2from2, setEditableText2from2 ] = useState(arrToString(twoColumn(editableText).part2));

  const [ editableText1from3, setEditableText1from3 ] = useState(arrToString(treeColumn(editableText).part1));
  const [ editableText2from3, setEditableText2from3 ] = useState(arrToString(treeColumn(editableText).part2));
  const [ editableText3from3, setEditableText3from3 ] = useState(arrToString(treeColumn(editableText).part3));

  const update = () => {
    setEditableText(editableText);
    setEditableText1from2(arrToString(twoColumn(editableText).part1));
    setEditableText2from2(arrToString(twoColumn(editableText).part2));
    setEditableText1from3(arrToString(treeColumn(editableText).part1));
    setEditableText2from3(arrToString(treeColumn(editableText).part2));
    setEditableText3from3(arrToString(treeColumn(editableText).part3));
    onHandleChange(editableText);
  };


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
  };

  const handleChangeText = (e) => {
    setEditableText(e.target.value);
    onHandleChange(editableText);
  };

  const handleChangeTextTwoColumn = (e) => {
    if (e.target.name === 'textarea1') {
      setEditableText1from2(e.target.value);
      onHandleChange(editableText1from2+' '+editableText2from2);
    }
    if (e.target.name === 'textarea2') {
      setEditableText2from2(e.target.value);
      // update();
      onHandleChange(editableText1from2+' '+editableText2from2);
      // onHandleChange(editableText);
    }
    setEditableText(editableText1from2+' '+editableText2from2);
  };

  const handleChangeTextTreeColumn = (e) => {
    if (e.target.name === 'textarea3') {
      setEditableText1from3(e.target.value);
    }
    if (e.target.name === 'textarea4') {
      setEditableText2from3(e.target.value);
    }
    if (e.target.name === 'textarea5') {
      setEditableText3from3(e.target.value);
    }
    setEditableText(editableText1from3+" "+editableText2from3+" "+editableText3from3);
  };

  return (
    <form className={styles.view}>
      {one && <TextArea name="text" onHandleChange={handleChangeText} text={editableText}/>}
      {two  && (
        <div className={styles.two}>
          <TextArea
            name='textarea1'
            width={40}
            onHandleChange={handleChangeTextTwoColumn}
            text={editableText1from2}
          />
          <TextArea
            name='textarea2'
            width={40}
            onHandleChange={handleChangeTextTwoColumn}
            text={editableText2from2}
          />
        </div>)
      }
      {tree && (
        <div className={styles.tree}>
          <TextArea
            name='textarea3'
            width={30}
            onHandleChange={handleChangeTextTreeColumn}
            text={editableText1from3}
          />
          <TextArea
            name='textarea4'
            width={30}
            onHandleChange={handleChangeTextTreeColumn}
            text={editableText2from3}
          />
          <TextArea
            name='textarea5'
            width={30}
            onHandleChange={handleChangeTextTreeColumn}
            text={editableText3from3}
          />
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
