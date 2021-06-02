import { useState } from 'react';
import Head from 'next/head'
import axios, { AxiosResponse } from 'axios';
import Card from '../components/Card';
import ClassComp from '../components/ClassComp';
import Button from '../components/Button';
import styles from '../styles/Home.module.css'

interface IHelloResponse {
  name: string;
  age: number;
}

export default function Home(): JSX.Element {
  const [data, setData] = useState('');

  const handleMath = (a: number, b: number): number => {
    return a + b;
  }

  const handleString = (str: string): string => {
    return str.toUpperCase();
  }

  const fetchHello = async () => {
    const res: AxiosResponse<IHelloResponse> = await axios.get('api/hello');

    setData(res.data.name);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Next-Typescript</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>Number output: {handleMath(3, 2)}</p>
        <p>String output: {handleString('hello')}</p>
        <button onClick={fetchHello}>Click me to fetch</button>
        <p>Response: {data}</p>

        <Card
          name="Typescript"
          age={9}
          imgUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--TBoJP1qV--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/377/landscape/typescriptlang.png"
          user={{
            name: 'JohnDoe',
            age: 30,
            hobbies: ['reading', 'climbing', 'programming']
          }}
        />

        <ClassComp stringProp="classComp" numberProp={5} stringArrayProp={["one", "two"]} />

        <Button type="button" text="Hi I'm a button" onClick={() => console.log('testing')} />
        <Button type="a" text="Hi I'm a link" href="http://www.google.com" />
      </main>
    </div>
  )
}
