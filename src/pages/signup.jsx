import React, { useState } from "react";
import styles from "../styles/signup.module.css";

const SignupPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    storeName: "",
    storeLogo: null,
    description:"",
    role: "Business",
    password: "",
    confirmPassword: "",
  });

  const [logoPreview, setLogoPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      setForm({ ...form, [name]: file });
      setLogoPreview(URL.createObjectURL(file));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("🎉 Account created successfully!");
  };

  return (
    <div className={styles.wrapper}>
      {/* --- Left Visual Section --- */}
      <div className={styles.visual}>
        <div className={styles.overlay}>
          <h1>Join <span>Stamply</span></h1>
          <p>Manage your business smarter — start your free 3 months trial today.</p>
        </div>
      </div>

      {/* --- Right Form Section --- */}
      <div className={styles.formContainer}>
        <h2>Create Your Account</h2>
        <p className={styles.subtext}>It only takes a minute to get started!</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <input type="text" name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          </div>

          <div className={styles.row}>
            <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} />
          </div>

          <input type="text" name="storeName" placeholder="Store Name" value={form.storeName} onChange={handleChange} required />

          <div className={styles.logoUpload}>
            <label htmlFor="storeLogo" className={styles.logoLabel}>
              Upload Store Logo
            </label>
            <input
              id="storeLogo"
              type="file"
              name="storeLogo"
              accept="image/*"
              onChange={handleChange}
            />
            {logoPreview && <img src={logoPreview} alt="Preview" className={styles.logoPreview} />}
          </div>

          <input type="text" name="description" placeholder="Description" value={form.description} className={styles.disabledInput} onChange={handleChange} required/>

          <input type="text" name="role" value={form.role} disabled className={styles.disabledInput} />

          <div className={styles.row}>
            <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} required />
          </div>

          <button type="submit" className={styles.submitButton}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
