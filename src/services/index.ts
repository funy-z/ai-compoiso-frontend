import { ElMessage } from "element-plus"

export const fetchAI = async (params: any) => {
  try {
    const response: any = await fetch(`/ai_api/ai_docs/generate`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        ...params,
      }),
    })
    return response.body.getReader()
  } catch (e: any) {
    ElMessage.error({
      message: e?.msg || e?.message || '请求失败',
      type: 'error',
      duration: 5000,
    })
    return null
  }
}
