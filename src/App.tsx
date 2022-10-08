import React, { lazy, Suspense, useState } from 'react'
import '@/app.css'
import '@/app.less'
import Class from '@/components/Class'
import { Demo1, Demo2 } from '@/components/index'
const LazyDemo = lazy(() => import('@/components/LazyDeme')) // 使用import语法配合react的Lazy动态引入资源
import bigImg from '@/assets/images/big.png'
import smallImg from '@/assets/images/small.png'
function App() {
   const [count, setCounts] = useState('')
   const [show, setShow] = useState(false)

   const onChange = (e: any) => {
      console.log('========= 666 =========')
      setCounts(e.target.value)
   }
   // 点击事件中动态引入css, 设置show为true
   const onClick = () => {
      import('./app.css')
      setShow(true)
   }
   return (
      <>
         <h2>webpack5-react-ts</h2>
         <Class></Class>
         <img src={smallImg} alt='小于10kb的图片' />
         <img src={bigImg} alt='大于于10kb的图片' />
         <h2>webpack5+react+ts</h2>
         <p>受控组件</p>
         <input type='text' value={count} onChange={onChange} />
         <br />
         <p>非受控组件</p>
         <input type='text' />
         <div className='smallImg'></div> {/* 小图片背景容器 */}
         {/* <div className='bigImg'></div> 大图片背景容器 */}
         <Demo1 />
         <h2 onClick={onClick}>展示</h2>
         {/* show为true时加载LazyDemo组件 */}
         {show && (
            <Suspense fallback={null}>
               <LazyDemo />
            </Suspense>
         )}
      </>
   )
}
export default App
