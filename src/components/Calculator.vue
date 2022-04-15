<template>
  <section aria-labelledby="calc-heading" aria-describedby="calc-info">
    <h2 id="calc-heading">Calculator</h2>
    <p class="subheading" id="calc-info">A basic calculator that does not honor the order of operations.</p>

    <div class="content calculator">
      <div class="display" aria-live="polite" aria-atomic="true">{{ display }}</div>

      <div class="buttons">
        <button type="button" class="c" aria-label="Clear" @click="clear">C</button>
        <button type="button" class="del" aria-label="Delete" @click="del">Del</button>

        <button type="button" class="one" @click="chooseNumber('1')">1</button>
        <button type="button" class="two" @click="chooseNumber('2')">2</button>
        <button type="button" class="three" @click="chooseNumber('3')">3</button>
        <button type="button" class="four" @click="chooseNumber('4')">4</button>
        <button type="button" class="five" @click="chooseNumber('5')">5</button>
        <button type="button" class="six" @click="chooseNumber('6')">6</button>
        <button type="button" class="seven" @click="chooseNumber('7')">7</button>
        <button type="button" class="eight" @click="chooseNumber('8')">8</button>
        <button type="button" class="nine" @click="chooseNumber('9')">9</button>
        <button type="button" class="zero" @click="chooseNumber('0')">0</button>

        <button type="button" class="decimal" aria-label="Add decimal" @click="addDecimal">.</button>
        <button type="button" class="pos-neg" aria-label="Toggle positive or negative value" @click="togglePosNeg">+/-</button>

        <button type="button" class="plus" aria-label="Add" @click="operate('+')">+</button>
        <button type="button" class="minus" aria-label="Subtract" @click="operate('-')">-</button>
        <button type="button" class="multiply" aria-label="Multiply" @click="operate('*')">*</button>
        <button type="button" class="divide" aria-label="Divide" @click="operate('/')">/</button>
        <button type="button" class="equal" aria-label="Equals" @click="operate('=')">=</button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Calculator',
  data () {
    return {
      display: '0',
      calcStore: { value: '0', op: '+' },
      shouldUpdateNumber: true
    }
  },
  methods: {
    ...mapActions(['increaseCalculations']),
    chooseNumber (number) {
      if (this.calcStore.op === '=') {
        this.clear()
      }

      // update entire display, e.g. after clicking an operator
      if (this.shouldUpdateNumber) {
        this.display = number
        this.shouldUpdateNumber = false
        return
      }

      this.display = this.display === '0' ? number : this.display + number
    },
    calculate (a, b, operation) {
      switch (operation) {
        case '+':
          return a + b
        case '-':
          return a - b
        case '*':
          return a * b
        case '/':
          return a / b
        default:
          return null
      }
    },
    operate (operator) {
      // handle pressing operator 2+ times in a row by overwriting operator
      if (this.shouldUpdateNumber) {
        this.calcStore.op = operator
        return
      }

      const displayValue = parseFloat(this.display)
      const prevDisplayValue = parseFloat(this.calcStore.value)
      const prevOperator = this.calcStore.op
      const total = this.calculate(prevDisplayValue, displayValue, prevOperator)

      this.display = total.toString()
      this.calcStore = { value: this.display, op: operator }
      this.shouldUpdateNumber = true

      if (operator === '=') {
        this.increaseCalculations()
      }
    },
    clear () {
      this.display = '0'
      this.calcStore = { value: '0', op: '+' }
      this.shouldUpdateNumber = true
    },
    del () {
      // let's start over if the last op was = OR some result is on screen
      if (this.calcStore.op === '=' || this.shouldUpdateNumber) {
        this.clear()
      }

      this.display = this.display.slice(0, -1)

      // display must never be empty!
      if (!this.display.length) {
        this.display = '0'
      }
    },
    togglePosNeg () {
      // only toggle values entered by user, not operation results
      if (this.shouldUpdateNumber) return

      const displayValue = parseFloat(this.display)

      this.display = (displayValue * -1).toString()
    },
    addDecimal () {
      if (this.calcStore.op === '=') {
        this.clear()
      }

      if (this.shouldUpdateNumber) {
        this.display = '0.'
      } else {
        if (!this.display.includes('.')) {
          this.display = `${this.display}.`
        }
      }

      this.shouldUpdateNumber = false
    }
  }
}
</script>
