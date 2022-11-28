import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';

import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/amslimaa.png',
      name: 'Amos Lima',
      role: 'Front-end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galeera ✌️' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return. O evento da Rocketseat. O nome do projeto  é DoctorCare 🚀' },
      { type: 'link', content: 'amos.dev/doctorcare' },
    ],
    publishedAt: new Date('2022-11-06 12:25:05'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/pedromarquex.png',
      name: 'Pedro Marques',
      role: 'Mobile Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galeera ✌️' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return. O evento da Rocketseat. O nome do projeto  é DoctorCare 🚀' },
      { type: 'link', content: 'amos.dev/doctorcare' },
    ],
    publishedAt: new Date('2022-11-01 11:25:05'),
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />))}
        </main>
      </div>
    </div>
  )

} 