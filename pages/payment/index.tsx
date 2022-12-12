import { Box, Typography, Button } from '@mui/material'
import Image from 'next/image'
import payment from '@public/payment.png'
import style from './Payment.module.scss'

const Payment = () => {
  return (
    <Box sx={{ paddingTop: '5rem' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Image
          src={payment}
          alt="payment icon"
          width="50%"
          height="50%"
          objectFit="contain"
        />
        <Typography
          sx={{
            padding: '1rem 0',
          }}
        >
          무통장입금 계좌번호 안내
        </Typography>
        <Typography>
          고투게더를 이용해주셔서 감사합니다. 무통장 입금을 원하실 경우, 아래
          계좌로 입금해주시면 됩니다.
        </Typography>
        <Typography
          sx={{
            padding: '2rem 0',
          }}
        >
          예약번호
        </Typography>
      </Box>
      <Box
        sx={{
          border: '1px solid #ddd',
          padding: '2rem 0',
          marginBottom: '2rem',
        }}
      >
        <Box sx={{ width: '80%', margin: '0 auto' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography sx={{ width: '35%' }}>계좌번호 : </Typography>
            <Typography>267-910020-36604</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography sx={{ width: '35%' }}>은행명 : </Typography>
            <Typography>KEB하나은행</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography sx={{ width: '35%' }}>예금주 : </Typography>
            <Typography>(주)더샤이니</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography sx={{ width: '35%' }}>입금기한 : </Typography>
            <Typography></Typography>
          </Box>
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          width: '100%',
        }}
      >
        예약 확인하기
      </Button>
    </Box>
  )
}

export default Payment
