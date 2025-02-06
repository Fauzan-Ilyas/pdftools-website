import { useCallback, useState } from "react"

export default function Uploading({ token }: { token: string }) {
    const [processing, setProcessing] = useState<number>()
    const [total, setTotal] = useState<number>()
    const [percentage, setPercentage] = useState(0)
    const [current, setCurrent] = useState<CurrentFile>()

  return (
    <div>Uploading</div>
  )
}
