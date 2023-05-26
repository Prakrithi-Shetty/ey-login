import React from 'react'
import { Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function SubmissionPage() {
  const navigate = useNavigate()

  const GoBackHome = () => {
    navigate(`/`)
  }

  return (
    <div className="custom-div-submission">
      <div className="custom-upload-file">
        <img src="./thankyou.png" alt="" />
      </div>
      <Typography className="custom-typography-submission">
        Thank You for Submitting the Form!
      </Typography>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={GoBackHome}
          className="box-shadow"
        >
          Home
        </Button>
      </div>
    </div>
  )
}

export default SubmissionPage
