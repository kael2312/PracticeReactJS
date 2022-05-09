import './App.css';
import BookManagement from './BookManagement/book-management';
import ContactForm from './ContactForm/contact-form';

function App() {
  return (
    <div className="App">
      <ContactForm></ContactForm>
      <BookManagement></BookManagement>
    </div>
  );
}

export default App;
