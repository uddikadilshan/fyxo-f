"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"


export function ProductForm({ productId }: { productId?: string }) {
  const [variants, setVariants] = useState<any[]>([])

  const addVariant = () => {
    setVariants([...variants, { id: Date.now().toString() }])
  }

  const removeVariant = (id: string) => {
    setVariants(variants.filter((v) => v.id !== id))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Collect product + variants data here
    console.log("Saving product with variants...")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Product Section */}
      <div className="space-y-4 border p-4 rounded">
        <h2 className="text-lg font-semibold">Product Information</h2>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="productCode">Product Code</FieldLabel>
            <Input id="productCode" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="productName">Product Name</FieldLabel>
            <Textarea id="productName" required />
          </Field>
          <Field>
            <FieldLabel>Category 1</FieldLabel>
            <Input id="category1" placeholder="FK reference" />
          </Field>
          <Field>
            <FieldLabel>Category 2</FieldLabel>
            <Select>
              <SelectTrigger><SelectValue placeholder="Select category2" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="cat2a">Category2 A</SelectItem>
                <SelectItem value="cat2b">Category2 B</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel>Category 3</FieldLabel>
            <Select>
              <SelectTrigger><SelectValue placeholder="Select category3" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="cat3a">Category3 A</SelectItem>
                <SelectItem value="cat3b">Category3 B</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel>Measurement Unit</FieldLabel>
            <Select>
              <SelectTrigger><SelectValue placeholder="Select unit" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="kg">Kilogram</SelectItem>
                <SelectItem value="pcs">Pieces</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel htmlFor="remark">Remark</FieldLabel>
            <Textarea id="remark" />
          </Field>
          <Field>
            <FieldLabel>Batch Type</FieldLabel>
            <Select required>
              <SelectTrigger><SelectValue placeholder="Select batch type" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="batchItem">Batch Item</SelectItem>
                <SelectItem value="batchGroup">Batch Group</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel>Product Type</FieldLabel>
            <Select required>
              <SelectTrigger><SelectValue placeholder="Select product type" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="product">Product</SelectItem>
                <SelectItem value="service">Service</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field className="flex items-center gap-2">
            <FieldLabel>Active</FieldLabel>
            <Switch id="active" />
          </Field>
        </FieldGroup>
      </div>

      {/* Variants Section */}
      <div className="space-y-4 border p-4 rounded">
        <h2 className="text-lg font-semibold">Product Variants</h2>
        {/*{variants.map((variant) => (*/}
        {/*  <ProductVariantForm*/}
        {/*    key={variant.id}*/}
        {/*    id={variant.id}*/}
        {/*    onRemove={() => removeVariant(variant.id)}*/}
        {/*  />*/}
        {/*))}*/}
        <Button type="button" variant="outline" onClick={addVariant}>
          + Add Variant
        </Button>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <Button type="submit">Save</Button>
        <Button type="button" variant="outline">Update</Button>
        <Button type="button" variant="destructive">Delete</Button>
        <Button type="reset" variant="secondary">Reset</Button>
      </div>
    </form>
  )
}
