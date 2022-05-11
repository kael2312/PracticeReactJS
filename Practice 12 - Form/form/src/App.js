import './App.css';
import BookManagement from './BookManagement/book-management';
import ContactForm from './ContactForm/contact-form';
import LibraryManagement from './LibraryManagement/library-management';
import SignUpForm from './SignupForm/sign-up-form';

function App() {
  return (
    <div className="App">
      {/* <ContactForm></ContactForm> */}
      {/* <SignUpForm></SignUpForm> */}

      {/* Library with Redux
      <BookManagement></BookManagement> */}

      Library without Redux
      <LibraryManagement></LibraryManagement>
    </div>
  );
}

export default App;
