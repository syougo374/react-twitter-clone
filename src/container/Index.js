import '../css/App.css';
// import Form from '../components/form';
import { Link } from 'react-router-dom';


function Index() {
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>title</th>
            <th>content</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>titledesu</td>
            <td>contentdesu</td>
          </tr>
        </tbody>
      </table>
      <Link to="/create/new">create_new</Link>
    </div>
  );
}

export default Index;
