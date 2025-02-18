const caregivers = [
    {
      Name: 'Morshed Haque',
      Area: 'Dhanmondi',
      Rating: 4.67,
      ExpectedSalary: 7000,
      ServicesProvided: 'Personal Care Assistance, Medication Management',
      Gender: 'Male',
      AboutMyself: 'I have been nursing elderly patients since 2018. I view them as my own loved one. I feel this job is very special and important for the society. If you hire me, I can assure, you will get a very good service.',
    },
    {
      Name: 'Tasnim Ahmed',
      Area: 'Banani',
      Rating: 4.92,
      ExpectedSalary: 12000,
      ServicesProvided: 'Meal Preparation, Companionship, Transportation',
      Gender: 'Female',
      AboutMyself: 'With a passion for caregiving, I am dedicated to providing exceptional support to seniors. I enjoy engaging in meaningful conversations and assisting with daily activities that enhance their well-being and happiness.',
    },
    {
      Name: 'Fahim Rahman',
      Area: 'Gulshan',
      Rating: 3.78,
      ExpectedSalary: 18000,
      ServicesProvided: 'Medication Management, Mobility Support, Respite Care',
      Gender: 'Male',
      AboutMyself: 'As a caregiver, my goal is to create a safe and comfortable environment for seniors. I am experienced in assisting with medication, providing mobility support, and offering respite care to families in need.',
    },
    {
      Name: 'Rabeya Khan',
      Area: 'Jigatola',
      Rating: 4.05,
      ExpectedSalary: 15000,
      ServicesProvided: 'Meal Preparation, Transportation, Light Housekeeping',
      Gender: 'Female',
      AboutMyself: 'Caring for seniors brings me immense joy. I believe in maintaining a clean and organized home environment while ensuring that seniors receive delicious and nutritious meals. Let me be your trusted caregiver.',
    },
    {
      Name: 'Imran Ahmed',
      Area: 'Gulshan',
      Rating: 3.25,
      ExpectedSalary: 13000,
      ServicesProvided: 'Companionship, Mobility Support, Home Safety Evaluation',
      Gender: 'Male',
      AboutMyself: 'With a background in nursing, I am well-equipped to provide compassionate companionship and essential support to seniors. Ensuring their safety and well-being is my top priority.',
    },
    {
      Name: 'Nusrat Jahan',
      Area: 'Banani',
      Rating: 4.72,
      ExpectedSalary: 14500,
      ServicesProvided: 'Medication Management, Light Housekeeping, Grocery Shopping and Errands',
      Gender: 'Female',
      AboutMyself: 'I am dedicated to making seniors feel comfortable and cared for. My expertise in medication management and housekeeping ensures that seniors receive the best care while living independently.',
    },
    {
      Name: 'Arif Khan',
      Area: 'Dhanmondi',
      Rating: 3.98,
      ExpectedSalary: 16000,
      ServicesProvided: 'Meal Preparation, Transportation, Memory Care',
      Gender: 'Male',
      AboutMyself: 'Memory care requires patience and understanding, and I am here to provide just that. I am committed to creating a supportive and enriching environment for seniors with memory challenges.',
    },
    {
      Name: 'Nazia Islam',
      Area: 'Gulshan',
      Rating: 4.85,
      ExpectedSalary: 17000,
      ServicesProvided: 'Personal Care Assistance, Light Housekeeping, Emotional Support',
      Gender: 'Female',
      AboutMyself: 'Seniors deserve personalized care that meets their unique needs. As a caregiver, I strive to provide assistance with personal care and create a warm and comforting atmosphere that fosters emotional well-being.',
    },
    {
      Name: 'Kamrul Hasan',
      Area: 'Banani',
      Rating: 3.62,
      ExpectedSalary: 11000,
      ServicesProvided: 'Medication Management, Mobility Support, Companionship',
      Gender: 'Male',
      AboutMyself: 'My experience in medication management and mobility support allows seniors to live comfortably and independently. I also enjoy engaging in meaningful conversations and building lasting relationships with those under my care.',
    },
    {
      Name: 'Sumaiya Rahman',
      Area: 'Dhanmondi',
      Rating: 4.56,
      ExpectedSalary: 18500,
      ServicesProvided: 'Meal Preparation, Companionship, Exercise and Physical Therapy',
      Gender: 'Female',
      AboutMyself: 'Physical well-being is crucial for seniors, and I am committed to promoting their health through exercise and nutritious meals. I believe in creating a positive and motivating environment that helps seniors thrive.',
    },
    {
      Name: 'Farhan Ahmed',
      Area: 'Gulshan',
      Rating: 3.14,
      ExpectedSalary: 14000,
      ServicesProvided: 'Meal Preparation, Light Housekeeping, Transportation',
      Gender: 'Male',
      AboutMyself: 'Every senior deserves a well-balanced and delicious meal. I am here to provide nutritious meals, maintain a clean living space, and ensure safe transportation to appointments and outings.',
    },
    {
      Name: 'Ayesha Khan',
      Area: 'Jigatola',
      Rating: 4.23,
      ExpectedSalary: 13000,
      ServicesProvided: 'Medication Management, Memory Care, Respite Care',
      Gender: 'Female',
      AboutMyself: 'Caring for seniors with memory challenges requires patience and compassion. I am dedicated to creating a calm and structured environment that enhances their quality of life and provides much-needed respite for families.',
    },
    {
      Name: 'Adil Chowdhury',
      Area: 'Dhanmondi',
      Rating: 3.89,
      ExpectedSalary: 12500,
      ServicesProvided: 'Companionship, Light Housekeeping, Grocery Shopping and Errands',
      Gender: 'Male',
      AboutMyself: 'I believe in the power of companionship to combat loneliness. Through meaningful interactions and helpful errands, I aim to bring joy to the lives of seniors and contribute to their overall well-being.',
    },
    {
      Name: 'Rabia Rahman',
      Area: 'Banani',
      Rating: 4.78,
      ExpectedSalary: 22000,
      ServicesProvided: 'Meal Preparation, Medication Management, Companionship',
      Gender: 'Female',
      AboutMyself: "Caring for seniors requires a holistic approach. I specialize in providing nutritious meals, assisting with medications, and fostering genuine connections through companionship. Your loved one's well-being is my priority.",
    },
    {
      Name: 'Tariq Ali',
      Area: 'Gulshan',
      Rating: 3.99,
      ExpectedSalary: 17000,
      ServicesProvided: 'Personal Care Assistance, Mobility Support, Light Exercises and Stretches',
      Gender: 'Male',
      AboutMyself: 'Maintaining physical health is essential for seniors. I offer personal care assistance, mobility support, and light exercises to help seniors stay active and independent. Together, we can achieve a healthier lifestyle.',
    },
    {
      Name: 'Nadia Khan',
      Area: 'Jigatola',
      Rating: 4.31,
      ExpectedSalary: 15000,
      ServicesProvided: 'Medication Management, Companionship Outings, Emotional Support',
      Gender: 'Female',
      AboutMyself: 'Seniors deserve joy and meaningful experiences. I am here to provide engaging outings, emotional support, and reliable medication management. Let\'s create lasting memories and enhance their overall well-being.',
    },
    {
      Name: 'Sajid Ahmed',
      Area: 'Dhanmondi',
      Rating: 3.67,
      ExpectedSalary: 13000,
      ServicesProvided: 'Meal Preparation, Transportation, Light Housekeeping',
      Gender: 'Male',
      AboutMyself: 'Creating a comfortable and clean living space is my priority. I offer meal preparation, transportation assistance, and light housekeeping to ensure that seniors enjoy a well-organized and stress-free environment.',
    },
    {
      Name: 'Amina Chowdhury',
      Area: 'Banani',
      Rating: 4.61,
      ExpectedSalary: 18000,
      ServicesProvided: 'Medication Management, Respite Care, Home Safety Evaluation',
      Gender: 'Female',
      AboutMyself: 'Safety and well-being go hand in hand. With expertise in medication management, respite care, and home safety evaluation, I am dedicated to creating a secure and nurturing environment for seniors.',
    },
    {
      Name: 'Rizwan Khan',
      Area: 'Gulshan',
      Rating: 3.85,
      ExpectedSalary: 15000,
      ServicesProvided: 'Personal Care Assistance, Exercise and Physical Therapy, Technology Assistance',
      Gender: 'Male',
      AboutMyself: 'Seniors deserve personalized care that enhances their quality of life. I provide essential personal care, engage in physical therapy, and offer technology assistance to promote their well-being and independence.',
    },
    {
      Name: 'Samina Rahman',
      Area: 'Jigatola',
      Rating: 4.14,
      ExpectedSalary: 16000,
      ServicesProvided: 'Meal Preparation, Companionship, Light Exercises and Stretches',
      Gender: 'Female',
      AboutMyself: 'Creating a healthy routine is essential for seniors. I offer nutritious meal preparation, companionship, and light exercises that contribute to their physical and emotional well-being. Let\'s embark on a journey to better health.',
    },
    {
      Name: 'Khalid Khan',
      Area: 'Dhanmondi',
      Rating: 3.79,
      ExpectedSalary: 17000,
      ServicesProvided: 'Medication Management, Memory Care, Transportation',
      Gender: 'Male',
      AboutMyself: 'Caring for seniors with memory challenges requires specialized skills. I am experienced in medication management, providing memory care, and ensuring safe transportation. Together, we can navigate the journey with compassion and understanding.',
    },
  ];
  
  export default caregivers;
  