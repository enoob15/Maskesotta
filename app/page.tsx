import { RecipientForm } from '@/components/RecipientForm';
import { Heart, Gift } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 20%, transparent)' }} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Maskesotta
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Connecting generous donors with Minnesotans in need of protection
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Recipient Side */}
            <div className="rounded-lg p-8" style={{ backgroundColor: 'var(--color-card)', borderWidth: '1px', borderColor: 'var(--color-border)' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 20%, transparent)' }}>
                  <Gift className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">I&apos;m in Minnesota</h2>
                  <p className="text-sm text-gray-400">
                    Get a free Baklava mask
                  </p>
                </div>
              </div>
              <RecipientForm />
            </div>

            {/* Donor Side */}
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">I Want to Help</h2>
                  <p className="text-sm text-muted-foreground">
                    Send a mask to someone in need
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-400">
                  Your donation will purchase a Baklava mask and ship it to a
                  verified Minnesota resident who needs one.
                </p>

                <div className="rounded-md p-4" style={{ backgroundColor: 'color-mix(in srgb, var(--color-muted) 50%, transparent)', borderWidth: '1px', borderColor: 'var(--color-border)' }}>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>$25</span>
                    <span className="text-gray-400">per mask</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Includes shipping and handling
                  </p>
                </div>

                <a
                  href="#"
                  className="block w-full font-semibold py-3 px-6 rounded-md hover:opacity-90 transition-opacity text-center"
                  style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-primary-foreground)' }}
                >
                  Donate a Mask
                </a>

                <p className="text-xs text-gray-400 text-center">
                  Powered by Shopify • Secure checkout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
