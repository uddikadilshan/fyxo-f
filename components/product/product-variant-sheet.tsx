"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

interface ProductVariant {
  id: string
  sku: string
  unitPrice: number
  bulkPrice: number
  barcode: string
  discountPercentage: number
  active: boolean
}

export function ProductVariantSheet({
                                      open,
                                      onOpenChange,
                                      onSave,
                                    }: {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (variant: ProductVariant) => void
}) {
  const [sku, setSku] = useState("")
  const [unitPrice, setUnitPrice] = useState(0)
  const [bulkPrice, setBulkPrice] = useState(0)
  const [barcode, setBarcode] = useState("")
  const [discountPercentage, setDiscountPercentage] = useState(0)
  const [active, setActive] = useState(true)

  const handleSave = () => {
    onSave({
      id: crypto.randomUUID(),
      sku,
      unitPrice,
      bulkPrice,
      barcode,
      discountPercentage,
      active,
    })
    // reset fields
    setSku("")
    setUnitPrice(0)
    setBulkPrice(0)
    setBarcode("")
    setDiscountPercentage(0)
    setActive(true)
    onOpenChange(false)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[400px] sm:w-[600px]">
        <SheetHeader>
          <SheetTitle>Add Product Variant</SheetTitle>
        </SheetHeader>
        <FieldGroup className="space-y-4 mt-4">
          <Field>
            <FieldLabel>SKU</FieldLabel>
            <Input value={sku} onChange={(e) => setSku(e.target.value)} required />
          </Field>
          <Field>
            <FieldLabel>Unit Price</FieldLabel>
            <Input type="number" value={unitPrice} onChange={(e) => setUnitPrice(Number(e.target.value))} />
          </Field>
          <Field>
            <FieldLabel>Bulk Price</FieldLabel>
            <Input type="number" value={bulkPrice} onChange={(e) => setBulkPrice(Number(e.target.value))} />
          </Field>
          <Field>
            <FieldLabel>Barcode</FieldLabel>
            <Input value={barcode} onChange={(e) => setBarcode(e.target.value)} />
          </Field>
          <Field>
            <FieldLabel>Discount %</FieldLabel>
            <Input type="number" value={discountPercentage} onChange={(e) => setDiscountPercentage(Number(e.target.value))} />
          </Field>
          <Field className="flex items-center gap-2">
            <FieldLabel>Active</FieldLabel>
            <Switch checked={active} onCheckedChange={setActive} />
          </Field>
        </FieldGroup>
        <SheetFooter className="mt-6 flex justify-end gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button onClick={handleSave}>Save Variant</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
