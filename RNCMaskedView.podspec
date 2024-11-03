require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = "RNCMaskedView"
  s.version      = package['version']
  s.summary      = package['description']
  s.license      = package['license']

  s.authors      = package['author']
  s.homepage     = package['homepage']
  s.platforms    = { :ios => "9.0", :tvos => "9.0" }

  s.source       = { :git => "https://github.com/react-native-masked-view/masked-view.git", :tag => "v#{s.version}" }
  s.source_files  = "ios/**/*.{h,m}"

  install_modules_dependencies(s)
end
