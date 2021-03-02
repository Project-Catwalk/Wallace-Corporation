import React from 'react';

const QuestionModal = () => {
  return (
    <>
    <div>
        <h3>Ask Your Question</h3>
        <h2>About the "product"</h2>
    </div>
    <div>
      <form action="">
        <p>Question: </p>
        <input type="text"/>
        <p>What is your nickname?</p>
        <input placerholder="example: jackson11!" type="text"/>
        <p>email</p>
        <input type="text"/>
        <button>Submit</button>
      </form>
    </div>
    </>
  )
};

export default QuestionModal;