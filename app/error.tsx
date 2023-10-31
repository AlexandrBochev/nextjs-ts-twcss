'use client'

export default function Error({ error }: { error: Error }) {
  return (
    <>
      <h2 className="mb-4 font-semibold text-lg">Ooops!!! { error.message }</h2>
    </>
  )
}