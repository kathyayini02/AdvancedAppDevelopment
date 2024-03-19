import React from 'react';

const About = () => {
  return (
    <div style={{ textAlign: 'center', maxWidth: '800px', margin: 'auto' }}>
      <div style={{ textAlign: 'center', padding: '30px', fontSize:'20px' }}>
        <h2>About Chess Academy</h2>
        <div className='hh'>
          <p>
            Welcome to our Chess Academy! At our academy, we have designed a seamless and user-friendly registration process to ensure that aspiring chess enthusiasts can easily join our community of passionate players. Our registration process is quick and efficient, allowing you to sign up with just a few simple steps. Upon registration, you gain access to a world of chess excellence, where learning and growth take center stage. Our academy prides itself on offering a diverse range of features, including personalized chess courses, interactive lessons from experienced coaches, and engaging tournaments to challenge your skills. With a focus on fostering a supportive learning environment, our academy is committed to providing valuable resources, such as chess strategy guides, video tutorials, and practice materials. Join us on this exciting journey, where you can enhance your chess skills, connect with fellow enthusiasts, and immerse yourself in the captivating world of strategic thinking and intellectual pursuit. Whether you're a beginner or an advanced player, our chess academy is dedicated to empowering you on your path to mastery. Discover the joy of chess and unlock your full potential with us!
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <div style={{ position: 'relative', width: '48%' }}>
          <img
            src="https://cdn.pixabay.com/photo/2016/02/22/09/44/chess-1215079_640.jpg"
            alt="About Chess Academy 1"
            style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '10px' }}
          />
          <p style={{ marginBottom: '10px' }}>Features</p>
        </div>
        <div style={{ width: '100%', marginTop: '20px', fontSize:'30px'}}>
          <p>
          1.Personalized Learning Paths
          </p>
          <p>
          2.Experienced Coaching
          </p>
          <p>
          3.Engaging Tournaments
          </p>
          <p>
          4.Supportive Community
          </p>
          <p>
          5.Continuous Skill Development
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <div style={{ position: 'relative', width: '30%' }}>
            <img
              src="https://chessacademy.com/cdn/shop/files/OnlineSummerCamps_2_720x.jpg?v=1696973443"
              alt="About Chess Academy 2"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <p style={{ marginBottom: '10px' }}>Online Class</p>
          </div>
          <div style={{ position: 'relative', width: '30%' }}>
            <img
              src="https://1.bp.blogspot.com/-M3tOY70p29k/XpFuLfNWUYI/AAAAAAAAnq8/_hkmO75aRCYcmAP3KudwI-9ouE8n_UiJACLcBGAsYHQ/s1600/Chess%2BChampionship.JPG"
              alt="About Chess Academy 3"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <p style={{ marginBottom: '10px' }}>Tournaments</p>
          </div>
          <div style={{ position: 'relative', width: '30%' }}>
            <img
              src="https://cdn.shopify.com/s/files/1/0520/9138/8064/files/tournamentraining-15_480x480.jpg?v=1615133811"
              alt="About Chess Academy 4"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <p style={{ marginBottom: '10px' }}>Best Teaching</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
