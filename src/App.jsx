import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from "./App.module.css";

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Pedro Luiz"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, blanditiis nulla quas amet suscipit nisi odit doloribus nihil et deserunt dolor eum atque sequi odio quos provident ad! Aperiam, corporis."
          />
          <Post
            author="Pedro Luiz"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, blanditiis nulla quas amet suscipit nisi odit doloribus nihil et deserunt dolor eum atque sequi odio quos provident ad! Aperiam, corporis."
          />
        </main>
      </div>
    </div>
  )
}

export default App
