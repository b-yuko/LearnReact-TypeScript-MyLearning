/*
  一連の state の更新をキューに入れる
  チャレンジ問題
  2. state キューの独自実装
*/


type StateUpdater = ((n: number) => number) | number;

function increment(n: number): number {
  return n + 1;
}
increment.toString = () => 'n => n+1';

interface TestCaseProps {
  baseState: number;
  queue: StateUpdater[];
  expected: number;
}

export default function App() {
  return (
    <>
      <TestCase
        baseState={0}
        queue={[1, 1, 1]}
        expected={1}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[
          increment,
          increment,
          increment
        ]}
        expected={3}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[
          5,
          increment,
        ]}
        expected={6}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[
          5,
          increment,
          42,
        ]}
        expected={42}
      />
    </>
  );
}

function TestCase({
                    baseState,
                    queue,
                    expected
                  }: TestCaseProps) {
  const actual = getFinalState(baseState, queue);
  return (
    <>
      <p>Base state: <b>{baseState}</b></p>
      <p>Queue: <b>[{queue.join(', ')}]</b></p>
      <p>Expected result: <b>{expected}</b></p>
      <p style={{
        color: actual === expected ? 'green' : 'red'
      }}>
        Your result: <b>{actual}</b>
        {' '}
        ({actual === expected ? 'correct' : 'wrong'})
      </p>
    </>
  );
}

function getFinalState(baseState: number, queue: StateUpdater[]) {
  let finalState = baseState;

  for (const update of queue) {
    if (typeof update === 'function') {
      finalState = update(finalState);
    } else {
      finalState = update;
    }
  }

  return finalState;
}