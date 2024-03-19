import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';

const centerContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
};

const courses = [
  {
    id: 1,
    level: 'Beginner',
    title: 'Chess Fundamentals',
    description: 'Learn the basics of chess, including piece movements and basic strategies.',
  },
  {
    id: 2,
    level: 'Intermediate',
    title: 'Advanced Tactics',
    description: 'Improve your tactical skills with advanced chess strategies and combinations.',
  },
  {
    id: 3,
    level: 'Expert',
    title: 'Mastering Endgames',
    description: 'Deepen your understanding of endgames and learn winning techniques.',
  },
];

const faqQuestions = [
  {
    id: 1,
    question: 'What are the basic rules of chess?',
    answer: 'Chess is played on an 8x8 grid with various pieces, each with different movements...',
  },
  {
    id: 2,
    question: 'How do I improve my chess strategy?',
    answer: 'Improving chess strategy involves studying different openings, midgame tactics, and endgames...',
  },
  {
    id: 3,
    question: 'Is chess beneficial for cognitive development?',
    answer: 'Yes, studies have shown that playing chess can improve critical thinking, problem-solving, and concentration skills...',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    comment: 'Chess Academy helped me advance from a beginner to an intermediate player in just a few months!',
  },
  {
    id: 2,
    name: 'Jane Smith',
    comment: 'The expert instructors at Chess Academy made learning chess fun and engaging!',
  },
  {
    id: 1,
    name: 'John Doe',
    comment: 'Chess Academy helped me advance from a beginner to an intermediate player in just a few months!',
  },
  {
    id: 1,
    name: 'John Doe',
    comment: 'Chess Academy helped me advance from a beginner to an intermediate player in just a few months!',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    comment: 'I highly recommend Chess Academy to anyone looking to improve their chess skills.',
  },
];

const FAQItem = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleAnswer}>
        <h4>{question}</h4>
        <span>{showAnswer ? '-' : '+'}</span>
      </div>
      {showAnswer && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

function Home() {
  return (
    <div style={centerContentStyle}>
      {/* Introductory Page with Chess Academy Images */}
      <div className="introductory-page">
        <h2>Welcome to Chess Academy</h2>
        <img
          src="https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlc3MlMjBib2FyZHxlbnwwfHwwfHx8MA%3D%3D" // Replace with your Chess Academy images
          //alt="Chess Academy"
          style={{ maxWidth: '50%', height: 'auto', marginBottom: '20px' }}
        />
        <p>
          Explore the world of chess with our expert instructors and comprehensive courses.
        </p>
      </div>
      
      {/* Course Slider */}
      <div className="course-slider">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.level}</h3>
            <h4>{course.title}</h4>
            <p>{course.description}</p>
            <Link to={`/course/${course.id}`} style={{ textDecoration: 'none' }}>
              <button>Enroll</button>
            </Link>
          </div>
        ))}
      </div>

      {/* Testimonials Carousel */}
      <div className="testimonial-carousel">
        <h3>Testimonials</h3>
        <div className="carousel-container">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item">
              <p>{testimonial.comment}</p>
              <p>- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h3>Frequently Asked Questions</h3>
        {faqQuestions.map((faq) => (
          <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      {/* "Get Started" button with Link to the login page */}
      <Link to="/login" style={{ marginTop: '20px', textDecoration: 'none' }}>
        <button style={{ fontSize: '20px' }}>Get Started</button>
      </Link>
    </div>
  );
}

export default Home;
