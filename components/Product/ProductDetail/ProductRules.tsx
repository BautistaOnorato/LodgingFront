import { Rule, Security } from "@/lib/types"

export interface ProductRulesProps {
  rules: Rule[]
  securities: Security[]
  cancellationPolicy: string
}

const ProductRules: React.FC<ProductRulesProps> = ({ rules, securities, cancellationPolicy }) => {
  return (
    <section className="px-8 space-y-4">
      <h3 className="text-xl font-bold border-b pb-2">Things to know</h3>
      <div className="flex w-full justify-between flex-wrap gap-6">
        <div>
          <h5 className="font-semibold mb-3">House rules</h5>
          <ul className="text-sm space-y-2">
            {
              rules.map(rule => (
                <li key={rule.id}>{rule.description}</li>
              ))
            }
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Safety & property</h5>
          <ul className="text-sm space-y-2">
            {
              securities.map(security => (
                <li key={security.id}>{security.description}</li>
              ))
            }
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Cancellation policy</h5>
          <p className="text-sm">{cancellationPolicy}</p>
        </div>
      </div>
    </section>
  )
}

export default ProductRules