import React, { useEffect, useState } from 'react';
import { db } from './Firebase';
import { collection, getDocs } from 'firebase/firestore';
import Card from './components/Card/Card';
import Hero from './components/Hero/Hero';

function App() {
  const [record, setRecord] = useState([]);
  const value = collection(db, "blogData");

  useEffect(() => {
    const getData = async () => {
      const dbVal = await getDocs(value);
      setRecord(dbVal.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, []);

  // Get the last item in the record array
  const HeroItem = record.length > 0 ? record[Math.floor(Math.random() * record.length)] : null;

  return (
    <>
      <div className="container">
      <main className="container">
      {HeroItem && (
            <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
              <div className="col-lg-6 px-0">
                <h1 className="display-4 fst-italic">{HeroItem.blog_title}</h1>
                <p className="lead my-3">{HeroItem.blog_info}.</p>
                <p className="lead mb-0">
                  <a href="#continue" className="text-body-emphasis fw-bold">...{HeroItem.name}</a>
                </p>
              </div>
            </div>
          )}

        <div className="row mb-2">
        {record.map((item) => (
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary-emphasis">World</strong>
                <h3 className="mb-0">{item.name}</h3>
                <div className="mb-1 text-body-secondary">{item.blog_title}</div>
                <p className="card-text mb-auto">{item.blog_info}.</p>
                <a href="#continue" className="icon-link gap-1 icon-link-hover stretched-link">
                  Continue reading
                  <svg className="bi">
                    <use xlinkHref="#chevron-right"></use>
                  </svg>
                </a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                </svg>
              </div>
            </div>
          </div>))}
        </div>
      </main>
    </div>
    </>
  );
}

export default App;
