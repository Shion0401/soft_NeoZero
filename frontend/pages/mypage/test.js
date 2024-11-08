import Link from "next/link";
import { useRouter } from "next/router";

function Second() {
  const router = useRouter();

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>Second Detail</h1>
      <h1>Second</h1>
      <button
        onClick={() => {
          router.back();
        }}
      >
      戻る
      </button>
    </div>
  );
}

export default Second;