import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-sm mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <p>&copy; 2023 DecentralFund. All rights reserved.</p>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

