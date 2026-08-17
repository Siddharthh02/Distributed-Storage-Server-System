# Distributed-storage-server-system
Distributed Storage Server System using AWS EC2, EFS, RDS, Load Balancer, CloudWatch, and VPC for scalable cloud-based file storage.
![AWS](https://img.shields.io/badge/AWS-Cloud-orange?logo=amazonaws)
![HTML](https://img.shields.io/badge/HTML-5-E34F26?logo=html5)
![CSS](https://img.shields.io/badge/CSS-3-1572B6?logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript)
![Linux](https://img.shields.io/badge/Linux-Ubuntu-E95420?logo=ubuntu)
![Apache](https://img.shields.io/badge/Apache-Web_Server-D22128?logo=apache)

A cloud-based distributed storage solution built on Amazon Web Services that provides scalable, highly available, and fault-tolerant file storage.

The project demonstrates the implementation of a secure cloud infrastructure using EC2, EFS, RDS, Application Load Balancer, CloudWatch, and VPC.

---

## Features

- Distributed file storage
- High availability
- Load balancing
- Shared file system
- Secure VPC architecture
- Database integration
- Performance monitoring
- Scalable infrastructure

---

## AWS Services Used

- Amazon EC2
- Amazon EFS
- Amazon RDS (MySQL)
- Application Load Balancer
- Amazon CloudWatch
- Amazon VPC
- Internet Gateway
- Route Tables
- Security Groups

---

## Architecture

User
↓
Application Load Balancer
↓
EC2 Instance 1
EC2 Instance 2
↓
Amazon EFS
↓
Amazon RDS

---

## Working

1. User accesses the website.
2. Application Load Balancer receives the request.
3. Request is forwarded to a healthy EC2 instance.
4. EC2 processes the request.
5. Files are stored in Amazon EFS.
6. Metadata is stored in Amazon RDS.
7. CloudWatch monitors the infrastructure.

---

## Technologies Used

### Frontend

- HTML
- CSS
- JavaScript

### Backend

- Apache Web Server
- Linux

### Cloud

- AWS EC2
- AWS EFS
- AWS RDS
- AWS CloudWatch
- AWS VPC
- Application Load Balancer

---

## Installation

Launch EC2 instances.

Mount Amazon EFS.

Configure Apache.

Connect Amazon RDS.

Deploy frontend files.

Access using the Load Balancer DNS.

---

## Project Screenshots

- Home Page
<img width="1600" height="795" alt="WhatsApp Image 2026-07-06 at 3 03 33 PM (1)" src="https://github.com/user-attachments/assets/926dc8b3-ed4d-4fc1-af15-59c82ed85c9a" />

- AWS Architecture
<img width="882" height="431" alt="Screenshot 2026-07-06 145927" src="https://github.com/user-attachments/assets/c07f5314-1b4a-4a22-9758-02a51cd89bea" />

- EC2 instance
  <img width="953" height="1008" alt="Screenshot 2026-04-29 102841" src="https://github.com/user-attachments/assets/e49e4664-fb55-4eb4-ba2f-77f78b511ea5" />

  -database
  <img width="1600" height="665" alt="WhatsApp Image 2026-07-06 at 3 03 34 PM" src="https://github.com/user-attachments/assets/b690f2f7-2395-4237-9170-bf522c5a30b7" />
  
-cloudwatch metrics
<img width="1600" height="724" alt="WhatsApp Image 2026-07-06 at 3 03 34 PM (1)" src="https://github.com/user-attachments/assets/029117dc-0ba3-4cf9-b704-bb31ee9264e0" />

-alarm setup and check
<img width="1600" height="774" alt="WhatsApp Image 2026-07-06 at 3 03 33 PM (2)" src="https://github.com/user-attachments/assets/7aebd942-606f-4359-9377-1fb69ccd0d0b" />


---

## Challenges Faced

VPC Configuration: Configuring the VPC and networking correctly for secure communication.
Route Table Misconfiguration: Incorrect route entries initially prevented internet and resource connectivity.
EFS Mounting: Mounting Amazon EFS on EC2 instances using NFS required proper configuration.
Health Check Failures: Fixing application and security settings to make EC2 instances healthy.
Testing & Troubleshooting: Identifying and resolving connectivity, configuration, and deployment issues across AWS services.

---

## Future Enhancements(can be added if want)

- Auto Scaling
- HTTPS using ACM
- CI/CD Pipeline
- Docker
- Kubernetes
- S3 Backup
- AWS Lambda
- Monitoring Dashboard

---

## License

This project is developed for educational purposes.
