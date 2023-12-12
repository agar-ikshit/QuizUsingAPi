import React from 'react';
import { AnswerObject } from '../App';

// Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';



type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <Wrapper>
  <p className='number'>
    Question: {questionNr} / {totalQuestions}
  </p>
  <p dangerouslySetInnerHTML={{ __html: question }} />
  <div>
    {answers.map((answer) => (
      <ButtonWrapper
        key={answer}
        correct={userAnswer?.correctAnswer === answer}
        userClicked={userAnswer?.answer === answer}
      >
        <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
          <span dangerouslySetInnerHTML={{ __html: answer }} />
        </button>
      </ButtonWrapper>
    ))}
  </div>
</Wrapper>
  );
  


export default QuestionCard;


// import React from 'react';

// type Props = {
//   question: string;
//   answers: string[];
//   callback: (answer: string) => void;
//   userAnswer: string | undefined; // Updated type
//   questionNr: number;
//   totalQuestions: number;
// };

// const QuestionCard: React.FC<Props> = ({
//   question,
//   answers,
//   callback,
//   userAnswer,
//   questionNr,
//   totalQuestions,
// }) => (
//   <div>
//     <p className="number">
//       Question: {questionNr} / {totalQuestions}
//     </p>
//     <p dangerouslySetInnerHTML={{ __html: question }} />
//     <div>
//       {answers.map((answer) => (
//         <div key={answer}>
//           <button
//             className={`answer-button ${userAnswer === answer ? 'selected' : ''}`}
//             disabled={userAnswer !== undefined}
//             onClick={() => callback(answer)}
//           >
//             <span dangerouslySetInnerHTML={{ __html: answer }} />
//           </button>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default QuestionCard;




