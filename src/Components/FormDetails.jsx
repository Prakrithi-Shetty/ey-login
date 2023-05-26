import React, { useState } from 'react'
import { Button, Grid, TextField, Typography, IconButton } from '@mui/material'
import { Clear } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

function FormDetails() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [resume, setResume] = useState('')
  const [photo, setPhoto] = useState('')
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const formErrors = {}

    if (!name) {
      formErrors.name = 'Name is required'
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      formErrors.name = 'Invalid name format'
    }

    if (!age) {
      formErrors.age = 'Age is required'
    } else if (!/^\d+$/.test(age)) {
      formErrors.age = 'Invalid age format'
    } else if (parseInt(age) < 18 || parseInt(age) > 100) {
      formErrors.age = 'Age must be between 18 and 100'
    }

    if (!phoneNumber) {
      formErrors.phoneNumber = 'Phone number is required'
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      formErrors.phoneNumber = 'Invalid phone number format'
    }

    setErrors(formErrors)

    if (Object.keys(formErrors).length === 0) {
    
      navigate(`/submission-page`)
    }
  }

  const handleRemoveResume = () => {
    setResume(null)
  }

  const handleRemovePhoto = () => {
    setPhoto(null)
  }

  const onChangeName = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const onChangeAge = (e) => {
    e.preventDefault()
    setAge(e.target.value)
  }

  const onChangeNumber = (e) => {
    e.preventDefault()
    setPhoneNumber(e.target.value)
  }

  const onChangeAddress = (e) => {
    e.preventDefault()
    setAddress(e.target.value)
  }

  return (
    <div className="custom-div-formdetails">
      <Typography variant="h4" mb={4} className="custom-typography">
        Profile Update
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            fullWidth
            value={name}
            onChange={onChangeName}
            error={!!errors.name}
            helperText={errors.name}
            style={{ marginBottom: 20 }}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Age"
            fullWidth
            value={age}
            onChange={onChangeAge}
            error={!!errors.age}
            helperText={errors.age}
            style={{ marginBottom: 20 }}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Phone Number"
            fullWidth
            value={phoneNumber}
            onChange={onChangeNumber}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber}
            style={{ marginBottom: 20 }}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address"
            fullWidth
            value={address}
            onChange={onChangeAddress}
            error={!!errors.address}
            helperText={errors.address}
            style={{ marginBottom: 20 }}
          />
        </Grid>
      </Grid>
      <div className="custom-upload">
        <div>
          <Button
            variant="contained"
            component="label"
            className="custom-button"
          >
            Upload Resume
            <input
              type="file"
              hidden
              onChange={(e) => setResume(e.target.files[0])}
              accept="application/pdf"
            />
          </Button>
          <div className="custom-height">
            {resume && (
              <div className="custom-upload-file">
                <Typography className="formdetails-typography">
                  {resume.name}
                </Typography>
                <IconButton size="small" onClick={handleRemoveResume}>
                  <Clear className="custom-icon" />
                </IconButton>
              </div>
            )}
          </div>
        </div>
        <div>
          <Button
            variant="contained"
            component="label"
            className="custom-button"
          >
            Upload Photo
            <input
              type="file"
              hidden
              onChange={(e) => setPhoto(e.target.files[0])}
              accept="image/jpeg, image/png, image/svg+xml"
            />
          </Button>
          <div className="custom-height">
            {photo && (
              <div className="custom-upload-file">
                {' '}
                <Typography className="formdetails-typography">
                  {photo.name}
                </Typography>{' '}
                <IconButton size="small" onClick={handleRemovePhoto}>
                  <Clear className="custom-icon" />
                </IconButton>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="custom-div-button">
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleFormSubmit}
          className="custom-div-formdetails-submit"
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default FormDetails
