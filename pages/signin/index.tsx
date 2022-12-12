import { TextField, Button } from '@mui/material'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { close } from '@store/sideBarStatusSlice'
import { useRequestSignInMutation } from '@api/requestApi'
import { useState } from 'react'
import Link from 'next/link'
import NavBar from '@components/NavBar'
import style from './SignIn.module.scss'

const isEmail = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

const SignIn = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const [requestSignIn] = useRequestSignInMutation()

  const [signInValues, setSignInValues] = useState({
    email: '',
    password: '',
  })
  const [signInValuesErrors, setSignInValuesErrors] = useState({})
  const [signInResponseMessage, setSignInResponseMessage] = useState('')

  const handleSignInValuesChange = (e) => {
    const { name, value } = e.target
    setSignInValues({ ...signInValues, [name]: value })
  }

  const removeInputSpaces = (e) => {
    const { name, value } = e.target
    setSignInValues({
      ...signInValues,
      [name]: value.trim().replace(/\s/g, ''),
    })
  }

  const validateSignIn = (values) => {
    const errors = {}
    if (!values.email) {
      errors.email = '이메일을 입력해주세요!'
    } else if (!isEmail.test(signInValues.email)) {
      errors.email = '올바른 이메일 형식이 아닙니다!'
    }
    if (!values.password) {
      errors.password = '비밀번호를 입력해주세요!'
    }
    return errors
  }

  const submitSignIn = async (e) => {
    e.preventDefault()
    const signInValidation = validateSignIn(signInValues)
    setSignInValuesErrors(validateSignIn(signInValues))
    setSignInResponseMessage('')

    if (Object.keys(signInValidation).length !== 0) return

    try {
      const res = await requestSignIn({
        data: signInValues,
      })
      console.log('res: ', res)
      if (res.data.statusCode === 200) {
        setSignInResponseMessage(
          '로그인에 성공했습니다! 홈페이지로 이동합니다!',
        )
        const { accessToken, refreshToken } = res.data.data
        window.localStorage.setItem('accessToken', accessToken)
        window.localStorage.setItem('refreshToken', refreshToken)
        setTimeout(() => {
          dispatch(close())
          router.push('/')
        }, 1000)
      } else if (res.data.statusCode === 400) {
        setSignInResponseMessage('로그인에 실패했습니다!')
      }
    } catch (e) {
      console.log('e: ', e)
      setSignInResponseMessage('로그인에 실패했습니다!')
    }
  }

  return (
    <>
      <NavBar link="/" title="로그인" />
      <form onSubmit={submitSignIn}>
        <div className={style['input-wrapper']}>
          <div className={style['label']}>이메일</div>
          <TextField
            name="email"
            size="small"
            placeholder="이메일을 입력해주세요"
            value={signInValues.email}
            sx={{ width: '100%' }}
            onChange={handleSignInValuesChange}
            onBlur={removeInputSpaces}
          />
          <p
            style={{
              visibility: signInValuesErrors.email ? 'visible' : 'hidden',
            }}
            className={style['error-message']}
          >
            {signInValuesErrors.email}
          </p>
        </div>
        <div className={style['input-wrapper']}>
          <div className={style['label']}>비밀번호</div>
          <TextField
            name="password"
            size="small"
            placeholder="비밀번호를 입력해주세요"
            value={signInValues.password}
            sx={{ width: '100%' }}
            onChange={handleSignInValuesChange}
            onBlur={removeInputSpaces}
          />
          <p
            style={{
              visibility: signInValuesErrors.password ? 'visible' : 'hidden',
            }}
            className={style['error-message']}
          >
            {signInValuesErrors.password}
          </p>
        </div>
        <div className={style['button-wrapper']}>
          <Button variant="contained" type="submit" sx={{ width: '100%' }}>
            로그인
          </Button>
        </div>
        <p
          className={
            signInResponseMessage !==
            '로그인에 성공했습니다! 홈페이지로 이동합니다!'
              ? style['error-message']
              : style['success-message']
          }
          style={{
            visibility: signInResponseMessage !== '' ? 'visible' : 'hidden',
          }}
        >
          {signInResponseMessage}
        </p>
        <div className={style['signup-link-wrapper']}>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </div>
      </form>
    </>
  )
}

export default SignIn
