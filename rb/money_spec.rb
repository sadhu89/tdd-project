# frozen_string_literal: true

require 'dry-struct'

module Types
  include Dry.Types()
end

class Dollar < Dry::Struct::Value
  attribute :amount, Types::Integer
end

def times(dollar, times)
  dollar.new(amount: dollar.amount * times)
end

describe Dollar do
  subject(:fiver) { described_class.new(amount: 5) }

  describe '#times' do
    specify do
      tenner = times(fiver, 2)
      expect(tenner.amount).to eq 10
    end
  end
end
