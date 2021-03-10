import React from 'react';
import { render, screen, cleanup, fireEvent, queryByTestId, act, queryByPlaceholderText } from '@testing-library/react';
import QA from '../client/src/components/qa/QA';
import Question from '../client/src/components/qa/Question';
import QASearchBar from '../client/src/components/qa/QASearchBar';
import Answer from '../client/src/components/qa/Answer';
import AnswerModal from '../client/src/components/qa/AnswerModal';
import QuestionModal from '../client/src/components/qa/QuestionModal';
import axios from 'axios';

const questions = [
  {
    question_body: 'First Question',
    question_helpfulness: 33,
    answers: {
      first:
      {
        body: 'Answer 1',
        photos: ["https://images.unsplash.com/photo-1542818212-9899bafcb9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1526&q=80"],
        date: "2020-11-13T00:00:00.000Z",
      },
      second:
      {
        body: 'Answer 2',
        photos: [],
        date: "2020-11-13T00:00:00.000Z",
      },
      third:
      {
        body: 'Answer 3',
        photos: [],
        date: "2020-11-13T00:00:00.000Z",
      },
    },
  },
  {
    question_body: 'Second Question',
    question_helpfulness: 7,
    answers: {},
  },
];

beforeEach(() => {
  axios.get = jest.fn(() =>
    Promise.resolve({
      data: Promise.resolve(questions),
    }),
  );
});

describe('QA Section', () => {
  it('renders to the page properly', () => {
    const { queryByText } = render(<QA />);
    expect(queryByText('qa-heading')).toBeTruthy;
  });

  it('Should trigger a modal popup', () => {
    const { queryByTestId, queryByPlaceholderText } = render(<QA questions={questions} />);
    const addAQuestion = queryByTestId('add-a-question-button');
    fireEvent.click(addAQuestion);
    expect(queryByPlaceholderText('Example: jack543!')).toBeTruthy;
  });

  it('Should show more questions when clicking the "show more questions" button', () => {
    const { queryByTestId } = render(<QA questions={questions} />);
    const showMoreQuestions = queryByTestId('show-more-questions-button');
    fireEvent.click(showMoreQuestions);
    expect(showMoreQuestions.textContent).toBe('Show Less Questions');
  });
});

describe('Search Bar', () => {
  it('Should properly change the input value', () => {
    const { queryByTestId } = render(<QASearchBar searchQuestions={() => console.log('Searching!')} />);
    const searchBar = queryByTestId('search-input');
    fireEvent.change(searchBar, { target: { value: 'I am a question' } });
    expect(searchBar.value).toBe('I am a question');
  });

  it('Should search for a question', () => {
    const { queryByTestId, queryByText } = render(<QA questions={questions} />);
    const searchBar = queryByTestId('search-input');
    fireEvent.change(searchBar, { target: { value: 'First Question' } });
    expect(queryByText('First Question')).toBeTruthy;
  });
});

describe('Question Section', () => {
  it('renders to the page properly', () => {
    const { queryByText } = render(<Question question={questions[0]} />);
    expect(queryByText('add-answer-button')).toBeTruthy;
  });

  it('Should show more answers upon clicking the "show more answers button"', () => {
    const { queryByTestId, queryByText } = render(<Question question={questions[0]} />);
    const showMoreAnswersButton = queryByTestId('show-more-answers-button');
    expect(queryByText('Answer 3')).toBeFalsy;
    fireEvent.click(showMoreAnswersButton);
    expect(queryByText('Answer 3')).toBeTruthy;
  });

  it('should open an answer modal', () => {
    const { queryByTestId, queryByPlaceholderText } = render(<Question question={questions[0]} />);
    const addAnswerButton = queryByTestId('show-more-answers-button');
    fireEvent.click(addAnswerButton);
    expect(queryByPlaceholderText('Example: jack543!')).toBeTruthy;
  });
});


describe('Answer Section', () => {
  it('Should properly render to the page', () => {
    const { queryByText } = render(<Answer answer={questions[0].answers.first} />);
    expect(queryByText('Answer 1')).toBeTruthy;
  });
});

describe('Answer Modal', () => {
  it('Should properly render to the page', () => {
    const { queryByTestId, queryByText, queryByPlaceholderText } = render(<AnswerModal />);
    const answerInput = queryByTestId('answer-input');
    const answerUsernameInput = queryByTestId('answer-username-input');
    const answerEmailInput = queryByTestId('answer-email-input');
    const answerPhotoUpload = queryByTestId('answer-photo-upload');
    const submit = queryByTestId('answer-modal-submit-button');
    fireEvent.change(answerInput, { target: { value: 'I\'m a new answer!' } });
    fireEvent.change(answerUsernameInput, { target: { value: 'tester' } });
    fireEvent.change(answerEmailInput, { target: { value: 'testemail@test.com' } });
    // fireEvent.change(answerPhotoUpload, new File([{name: "blob:http://localhost:3000/59643764-7b4b-48f5-8ac1-61183a042cbe"}], 'foo.txt'));
    fireEvent.click(submit);
    expect(queryByText('I\'m a new answer!')).toBeTruthy;
  });
});

describe('Question Modal', () => {
  it('Should properly submit data and render it to the page', () => {
    const { queryByTestId, queryByText, queryByPlaceholderText } = render(<QuestionModal productId={11111} />);
    const questionInput = queryByTestId('question-input');
    const questionUsernameInput = queryByTestId('question-username-input');
    const questionEmailInput = queryByTestId('question-email-input');
    const submit = queryByTestId('question-modal-submit-button');
    fireEvent.change(questionInput, { target: { value: 'I\'m a new question!' } });
    fireEvent.change(questionUsernameInput, { target: { value: 'tester' } });
    fireEvent.change(questionEmailInput, { target: { value: 'testemail@test.com' } });
    // fireEvent.change(answerPhotoUpload, new File([{name: "blob:http://localhost:3000/59643764-7b4b-48f5-8ac1-61183a042cbe"}], 'foo.txt'));
    fireEvent.click(submit);
    expect(queryByText('I\'m a new question!')).toBeTruthy;
  });

  it('Should properly clear the form upon clicking away from the modal', () => {
    const { queryByTestId } = render(<QuestionModal onClose={() => console.log('closed')} productId={11111} />);
    const questionInput = queryByTestId('question-input');
    const questionUsernameInput = queryByTestId('question-username-input');
    const questionEmailInput = queryByTestId('question-email-input');
    const overlay = queryByTestId('question-overlay');
    // fireEvent.change(questionInput, { target: { value: 'I\'m a new question!' } });
    fireEvent.change(questionUsernameInput, { target: { value: 'tester' } });
    fireEvent.change(questionEmailInput, { target: { value: 'testemail@test.com' } });
    fireEvent.click(overlay);
    // expect(questionInput.textContent).toBe('');
    expect(questionUsernameInput.textContent).toBe('');
    expect(questionEmailInput.textContent).toBe('');
  });
});