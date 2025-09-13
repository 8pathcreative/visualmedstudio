export function Footer() {
  return (
    <footer className="w-full px-4 py-12 bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-black text-lg">V</span>
              </div>
              <span className="font-sans font-black text-xl text-foreground">Vismed Studio</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Transforming medical education through cutting-edge 3D visualization and interactive applications.
            </p>
            <p className="text-sm text-muted-foreground">© 2025 Vismed Studio. All rights reserved.</p>
          </div>

          <div>
            <h3 className="font-sans font-bold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  3D Medical Models
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Educational Apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Custom Illustrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-bold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>hello@vismedstudio.com</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
