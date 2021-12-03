# frozen_string_literal: true

require 'dry-struct'

module Types
  include Dry.Types()
end

class Money < Dry::Struct::Value
  attribute :amount, Types::Float
  attribute :currency, Types::String
end

def times(money, times)
  money.new(amount: money.amount * times)
end

def divide(money, divisor)
  money.new(amount: money.amount / divisor)
end


describe Money do
  subject(:money) { described_class.new(amount: amount, currency: currency) }

  describe '#times' do
    context 'with dollars' do
      let(:currency) { 'USD' }
      let(:amount) { 5 }

      specify do
        tenner = times(money, 2)
        expect(tenner.amount).to eq 10
        expect(tenner.currency).to eq 'USD'
      end
    end

    context 'with euros' do
      let(:currency) { 'EUR' }
      let(:amount) { 10 }

      specify do
        tenner = times(money, 2)
        expect(tenner.amount).to eq 20
        expect(tenner.currency).to eq 'EUR'
      end
    end
  end

  describe '#divide' do
    let(:currency) { 'KRW' }
    let(:amount) { 4002.00 }
    let(:expectedMoneyAfterDivision) { Money.new(amount: 1000.5, currency: 'KRW') }

    specify do
      expect(divide(money, 4)).to eq expectedMoneyAfterDivision
    end
  end
end
