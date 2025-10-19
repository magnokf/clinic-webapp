"use client";

import { PricingTable } from "@clerk/nextjs";
import { Card, CardContent } from "./ui/card";

const Pricing = () => {
	const billingOn =
		process.env.NEXT_PUBLIC_ENABLE_BILLING === "true" ||
		process.env.NODE_ENV === "production";

	if (!billingOn) {
		return (
			<div className="text-sm text-muted-foreground">
				Billing disabled - dev mode
			</div>
		);
	}

	return (
		<Card className="border-emerald-900/30 shadow-lg bg-gradient-to-b from-emerald-950/30 to-transparent">
			<CardContent className="p-6 md:p-8">
				<PricingTable
					checkoutProps={{
						appearance: {
							elements: {
								drawerRoot: {
									zIndex: 2000,
								},
							},
						},
					}}
				/>
			</CardContent>
		</Card>
	);
};

export default Pricing;
