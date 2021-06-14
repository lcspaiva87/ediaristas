import Head from 'next/head'
import {SafeEnvironment} from 'ui/components/Feedbaack/SafeEnvironment/SafeEnvironment'
export default function Home() {
  return (
    <div>
      <h1>
        <SafeEnvironment />
      </h1>
    </div>
  )
}
