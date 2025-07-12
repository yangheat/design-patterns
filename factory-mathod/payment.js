function createPayment(type) {
  const payment = {
    creditCard: {
      process: (amount) => console.log(`신용카드 결제: ${amount}`),
      refund: (transactionId) => console.log(`신용카드 환불: ${transactionId}`),
      validate: (cardInfo) => console.log(`카드 정보 검증: ${cardInfo}`)
    },
    bankTransfer: {
      process: (amount) => console.log(`계좌이체 결제: ${amount}`),
      refund: (transactionId) => console.log(`계좌이체 환불: ${transactionId}`),
      validate: (accountInfo) => console.log(`계좌 정보 검증: ${accountInfo}`)
    },
    crypto: {
      process: (amount) => console.log(`암호화폐 결제: ${amount}`),
      refund: (transactionId) => console.log(`암호화폐 환불: ${transactionId}`),
      validate: (cryptoInfo) => console.log(`암호화폐 정보 검증: ${cryptoInfo}`)
    }
  }

  return payment[type]
}

const payment = createPayment('creditCard')
payment.process(5000)
payment.refund('1234567890')
payment.validate('1234567890')

const payment2 = createPayment('bankTransfer')
payment2.process(5000)
payment2.refund('1234567890')
payment2.validate('1234567890')

const payment3 = createPayment('crypto')
